import {
    Button,
    Container,
    FormField,
    Grid,
    Input,
    PieChart,
    ProgressBar,
    SpaceBetween
} from "@cloudscape-design/components";
import React, { useState } from 'react';
import { Calculator } from "../features/stats/calculator";
import Attributes, { Attribute } from "./Attributes";

const pointCalculator = new Calculator(5, 2);
const spentCalculator = new Calculator(10, 1);

const Stats = () => {
    const [level, setLevel] = useState(1);
    const [str, setStr] = useState(1);
    const [agi, setAgi] = useState(1);
    const [vit, setVit] = useState(1);
    const [int, setInt] = useState(1);
    const [dex, setDex] = useState(1);
    const [luk, setLuk] = useState(1);

    function availablePoints(level: number) {
        return pointCalculator.getPoints(level + 1) + 45;
    }

    function spentPoints(...stats: number[]) {
        return stats.map(level => spentCalculator.getPoints(level))
            .reduce((a, v) => a + v, 0);
    }

    const resetPoints = () => {
        setLevel(1);
        setStr(1);
        setAgi(1);
        setVit(1);
        setInt(1);
        setDex(1);
        setLuk(1);
    };

    const spent = spentPoints(str, agi, vit, int, dex, luk);
    const available = availablePoints(level);

    const chartData = [
        {title: Attribute.STR.toUpperCase(), value: str},
        {title: Attribute.AGI.toUpperCase(), value: agi},
        {title: Attribute.VIT.toUpperCase(), value: vit},
        {title: Attribute.INT.toUpperCase(), value: int},
        {title: Attribute.DEX.toUpperCase(), value: dex},
        {title: Attribute.LUK.toUpperCase(), value: luk},
    ];
    return <Grid gridDefinition={[{colspan: 3}, {colspan: 9}]}>
        <SpaceBetween size={'m'}>
            <Container>
                <FormField label='Level'>
                    <Input
                        type={"number"}
                        aria-label="Set character level"
                        step={"any"}
                        value={`${level}`}
                        inputMode={"numeric"}
                        onChange={({detail}) => setLevel(+detail.value)}
                    />
                </FormField>
            </Container>
            <Container>
                <SpaceBetween size={'m'}>
                    <Attributes attribute={Attribute.STR} level={str} setter={setStr}/>
                    <Attributes attribute={Attribute.AGI} level={agi} setter={setAgi}/>
                    <Attributes attribute={Attribute.VIT} level={vit} setter={setVit}/>
                    <Attributes attribute={Attribute.INT} level={int} setter={setInt}/>
                    <Attributes attribute={Attribute.DEX} level={dex} setter={setDex}/>
                    <Attributes attribute={Attribute.LUK} level={luk} setter={setLuk}/>
                    <Button onClick={resetPoints}>Reset</Button>
                </SpaceBetween>
            </Container>
        </SpaceBetween>
        <SpaceBetween size={'m'}>
            <Container>
                <ProgressBar
                    label={'Point allocation'}
                    description={`Spent ${spent} points out of ${available}`}
                    additionalInfo={`Remaining points: ${available - spent}`}
                    value={100 * spent / available}
                />
            </Container>
            <Container>
                <PieChart data={chartData} size={"large"} variant={"donut"} hideFilter hideLegend/>
            </Container>
        </SpaceBetween>
    </Grid>
};
export default Stats;