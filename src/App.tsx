import "@cloudscape-design/global-styles/index.css"
import { AppLayout, ContentLayout, Header } from "@cloudscape-design/components";
import Stats from "./components/Stats";
import { applyMode, Mode } from "@cloudscape-design/global-styles";

const description = `
This web application is built to calculate the cost of allocating points in the video game Ragnarok Online.
Currently it only supports allocation for up to level 99 for both base level and stat level
`;

function App() {
    applyMode(Mode.Dark);
    const header = (
        <Header variant={'h1'} description={description}>
            Ragnarok Stats Calculator
        </Header>
    );
    const content = (
        <ContentLayout header={header}>
            <Stats/>
        </ContentLayout>
    );

    return <AppLayout
        content={content}
        toolsHide={true}
        navigationHide={true}
    />
}

export default App;
