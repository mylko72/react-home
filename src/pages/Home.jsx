import React from 'react';
import TopVisual from '../components/TopVisual';
import MyWork from '../components/MyWork';
import MySkill from '../components/MySkill';

export default function Home() {
    return (
        <>
            <TopVisual type="sticky" heightNum="2" />
            <MyWork />
            <MySkill />
        </>
    );
}

