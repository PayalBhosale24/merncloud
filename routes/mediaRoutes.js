import { Router } from 'express';
import dotenv from 'dotenv';
import multer from 'multer';
import { requireSignIn } from '../middlewares/authMiddleware.js';
import {
    deleteMediaController,
    downloadMediaController,
    editMediaController,
    getAllMediaController,
    getMediaController,
    getUserMediaController,
    loadMoreFilesController,
    searchProductController,
    uploadMediaController,
} from '../controller/mediaController.js';

dotenv.config();

const router = Router();

// Configure Multer for memory storage
const upload = multer({
    storage: multer.memoryStorage(), // Use memory storage
    limits: { fileSize: 100 * 1024 * 1024 }, // Limit file size to 100 MB
});

// Routes
router.post('/upload', requireSignIn, upload.single('file'), uploadMediaController);
router.get('/get/:filename', getMediaController);
router.get('/get-all', getAllMediaController);
router.get('/get-user-media', requireSignIn, getUserMediaController);
router.delete('/delete/:id', requireSignIn, deleteMediaController);
router.put('/edit/:id', requireSignIn, editMediaController);
router.get('/search/:keyword', searchProductController);
router.get('/more-files/:page', loadMoreFilesController);
router.get('/download/:filename', downloadMediaController);

export default router;
