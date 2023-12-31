"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express")); // ESModules
const diaryServices = __importStar(require("../service/diaryServices"));
const diaryHandler_1 = __importDefault(require("../handler/diaryHandler"));
const router = express_1.default.Router();
router.get('/', (_req, res) => {
    console.log('Fetching all entry diaries');
    res.send(diaryServices.getEntriesWithoutSensitiveInfo());
});
router.get('/:id', (req, res) => {
    console.log('Fetching diary by id');
    const diary = diaryServices.findById(Number(req.params.id));
    return (diary !== undefined) ? res.send(diary) : res.sendStatus(404);
});
router.post('/', (req, res) => {
    try {
        const newDiaryEntry = (0, diaryHandler_1.default)(req.body);
        const addedDiaryEntry = diaryServices.addDiary(newDiaryEntry);
        res.json(addedDiaryEntry);
    }
    catch (error) {
        res.status(400).send(error.message);
    }
});
exports.default = router;
//# sourceMappingURL=diaries.js.map