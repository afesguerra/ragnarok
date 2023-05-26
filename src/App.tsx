import React from 'react';
import './App.css';
import "@cloudscape-design/global-styles/index.css"
import {AppLayout, ContentLayout, Header} from "@cloudscape-design/components";
import Stats from "./components/Stats";
import {applyMode, Mode} from "@cloudscape-design/global-styles";

function App() {
    applyMode(Mode.Dark);
    const content = <ContentLayout header={<Header>Ragnarok Stats Calculator</Header>}>
        <Stats/>
    </ContentLayout>;

    return <AppLayout
        content={content}
        toolsHide={true}
        navigationHide={true}
    />
}

export default App;
