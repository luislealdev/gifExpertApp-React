import React from 'react';
import {createRoot} from "react-dom/client";
import GifExpertApp from './GifExpertApp'
import "./styles.css"; //Import the css styles


const root = createRoot(document.getElementById('root'));
root.render(<GifExpertApp />);