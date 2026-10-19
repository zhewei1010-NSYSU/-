import React from 'react';
import { createRoot } from 'react-dom/client';
import Journal from '../app/journal';
import '../app/globals.css';
createRoot(document.getElementById('root')!).render(<Journal/>);
