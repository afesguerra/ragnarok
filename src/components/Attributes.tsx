import { Calculator } from "../features/stats/calculator";
import { Dispatch, SetStateAction } from "react";
import { FormField, Input } from "@cloudscape-design/components"

export enum Attribute {
    STR = 'str',
    AGI = 'agi',
    VIT = 'vit',
    INT = 'int',
    DEX = 'dex',
    LUK = 'luk',
}

export interface AttributeProps {
    attribute: Attribute,
    level: number,
    setter: Dispatch<SetStateAction<number>>,
}

const calculator = new Calculator(10, 1);
const Attributes = ({attribute, level, setter}: AttributeProps) => {
    const spent = calculator.getPoints(level);
    return <FormField
        label={attribute.toUpperCase()}
        description={`Points spent: ${spent}`}>
        <Input
            type="number"
            aria-label="Set attribute level"
            step={"any"}
            value={`${level}`}
            inputMode={"numeric"}
            onChange={({detail}) => setter(+detail.value)}
        />
    </FormField>;
};

export default Attributes;