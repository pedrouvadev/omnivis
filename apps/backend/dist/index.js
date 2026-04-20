"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const voluntarios_1 = __importDefault(require("./routes/voluntarios"));
const disponibilidades_1 = __importDefault(require("./routes/disponibilidades"));
const abrigos_1 = __importDefault(require("./routes/abrigos"));
const auth_1 = __importDefault(require("./routes/auth"));
const doacoes_1 = __importDefault(require("./routes/doacoes"));
const packs_1 = __importDefault(require("./routes/packs"));
const app = (0, express_1.default)();
const PORT = process.env.PORT || 3000;
app.use(express_1.default.json());
// Health check
app.get('/health', (req, res) => {
    res.json({ status: 'ok', message: 'OMNIVIS Backend API' });
});
// API Routes
app.use('/api/v1/voluntarios', voluntarios_1.default);
app.use('/api/v1', disponibilidades_1.default);
app.use('/api/v1/abrigos', abrigos_1.default);
app.use('/api/v1/auth', auth_1.default);
app.use('/api/v1/doacoes', doacoes_1.default);
app.use('/api/v1/packs', packs_1.default);
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
