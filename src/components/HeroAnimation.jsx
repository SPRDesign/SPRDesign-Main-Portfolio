import React, { useEffect, useRef } from 'react';

import icon4 from '../assets/img/icon4.png';
import icon5 from '../assets/img/icon5.png';
import icon6 from '../assets/img/icon6.png';
import icon7 from '../assets/img/icon7.png';
import icon8 from '../assets/img/icon8.png';
import icon9 from '../assets/img/icon9.png';
import icon10 from '../assets/img/icon10.png';
import icon11 from '../assets/img/icon11.png';
import icon12 from '../assets/img/icon12.png';
import icon13 from '../assets/img/icon13.png';
import icon14 from '../assets/img/icon14.png';
import icon15 from '../assets/img/icon15.png';
import icon16 from '../assets/img/icon16.png';
import icon17 from '../assets/img/icon17.png';
import icon18 from '../assets/img/icon18.png';
import icon19 from '../assets/img/icon19.png';


const HeroAnimation = () => {
    const canvasRef = useRef(null);
    const CHARS = [];
    const MAX_CHARS = 150;
    const SEPARATION = 8;
    const ICON_SIZE = 20; 
    let ww, wh, camera;
    let time = 0;

    class Vector {
        constructor(x, y, z) {
            this.x = x;
            this.y = y;
            this.z = z;
        }

        rotate(dir, ang) {
            const X = this.x;
            const Y = this.y;
            const Z = this.z;

            const SIN = Math.sin(ang);
            const COS = Math.cos(ang);

            if (dir === "x") {
                this.y = Y * COS - Z * SIN;
                this.z = Y * SIN + Z * COS;
            } else if (dir === "y") {
                this.x = X * COS - Z * SIN;
                this.z = X * SIN + Z * COS;
            }
        }

        project() {
            const ZP = this.z + camera.z;
            const DIV = ZP / (wh * 0.8)
            const XP = (this.x + camera.x) / DIV;
            const YP = (this.y + camera.y) / DIV;
            const CENTER = getCenter();
            return [XP + CENTER[0], YP + CENTER[1], ZP];
        }
    }

    class Char {
        constructor(iconImg, pos) {
            this.iconImg = iconImg;
            this.pos = pos;
        }

        rotate(dir, ang) {
            this.pos.rotate(dir, ang);
        }

        render(ctx) {
            const PIXEL = this.pos.project();
            const XP = PIXEL[0];
            const YP = PIXEL[1];

            ctx.drawImage(this.iconImg, XP, YP, ICON_SIZE, ICON_SIZE);
        }
    }

    const getCenter = () => {
        return [ww / 1.5, wh / 2.3];
    }

    const signedRandom = () => {
        return Math.random() - Math.random();
    }

    const update = (ctx) => {
        ctx.clearRect(0, 0, ww, wh);
        for (let i = 0; i < CHARS.length; i++) {
            const DX = 0.005 * Math.sin(time * 0.001);
            const DY = 0.005 * Math.cos(time * 0.001);
            CHARS[i].rotate("x", DX);
            CHARS[i].rotate("y", DY);
        }
        ++time;
    }

    const render = (ctx) => {
        for (let i = 0; i < CHARS.length; i++) {
            CHARS[i].render(ctx);
        }
    }

    const getRandomInt = (min, max) => {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    const createChars = () => {
        for (let i = 0; i < MAX_CHARS; i++) {
            const ICONS = [ icon4, icon5, icon6, icon7, icon8, icon9, icon10, icon11, icon12, icon13, icon14, icon15, icon16, icon17, icon18, icon19];
            const ICON = ICONS[getRandomInt(0, ICONS.length - 1)];
            const X = signedRandom() * SEPARATION;
            const Y = signedRandom() * SEPARATION;
            const Z = signedRandom() * SEPARATION;
            const POS = new Vector(X, Y, Z);
            const iconImg = new Image();
            iconImg.src = ICON;
            const CHAR = new Char(iconImg, POS);
            CHARS.push(CHAR);
        }
    }

    const setDim = () => {
        ww = window.innerWidth;
        wh = window.innerHeight;
        const ctx = canvasRef.current.getContext('2d');
        canvasRef.current.width = (ww * window.devicePixelRatio) | 0;
        canvasRef.current.height = (wh * window.devicePixelRatio) | 0;
        ctx.scale(devicePixelRatio, devicePixelRatio);
    }

    const initCamera = () => {
        camera = new Vector(0, 0, SEPARATION + 1);
    }

    useEffect(() => {
        setDim();
        initCamera();
        createChars();
        const ctx = canvasRef.current.getContext('2d');
        const animate = () => {
            update(ctx);
            render(ctx);
            requestAnimationFrame(animate);
        }
        animate();
        window.addEventListener('resize', setDim);
        return () => {
            window.removeEventListener('resize', setDim);
        };
    }, []);

    return (
        <canvas ref={canvasRef} style={{ position: 'absolute', zIndex: '-1', top: '0', left: '0', pointerEvents: 'none' }}></canvas>
    );
}

export default HeroAnimation;
