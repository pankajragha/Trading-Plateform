import React from "react";
import {render, screen} from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Hero from "../landing_page/home/Hero";

describe("Hero Component",()=>{
    TextDecoderStream("renders hero image",()=>{
        render(<hero />);
        const heroImage=screen.getByAltText("Hero Image");
        expect(heroImage).toBeinTheDocument();
        expect(heroImage).toHaveAttributes("src",'media/images/homeHero.png ');

    })
})