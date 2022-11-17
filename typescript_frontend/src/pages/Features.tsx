import axios from "axios"
import { ChangeEvent, useEffect, useState } from "react"
import Button from "@/components/buttons/Button"


type Key = string
type Val = string | number | boolean
type Options = boolean[] | number[] | string[]

interface Feature {
    key: Key,
    val: Val,
    options: Options
}

export interface Features {
    [key: Key]: Feature
}

interface FeatureCompProps {
    featureName: string
    feature: Feature
}

export const FeatureComp: React.FC<FeatureCompProps> = ({ featureName, feature }) => {

    const featureType = typeof feature.val

    if (featureType == "number") {
        return <div className="grid grid-cols-3 gap-2 items-center">
            <div className="font-bold text-xl">
                {featureName}
            </div>
            <div>
                <Slider feature={feature} featureName={featureName} />
            </div>

        </div>
    }

    else if (featureType == "boolean") {
        return <div className="grid grid-cols-3 gap-2 items-center">
            <div className="font-bold text-xl">
                {featureName}
            </div>
            <div>
                {feature.val}
                <BtnToggle feature={feature} featureName={featureName} />
            </div>
        </div>
    }
    return <>{`${featureType} not implemented yet`}</>
}

interface BtnToggleProps {
    featureName: string
    feature: Feature
}

const BtnToggle: React.FC<BtnToggleProps> = ({ feature, featureName }) => {
    const [value, setValue] = useState(feature.val)
    const changeHandler = () => {
        setValue(!value)
        axios.post("/api/update_feature", { featureName, value })
    }

    return <div className="flex flex-row gap-2 w-full" >
        <input
            type="checkbox"
            className="
                appearance-none
                w-full
                h-6
                p-0
                bg-gray-200
                rounded-lg
                focus:outline-none focus:ring-0 focus:shadow-none
                "
            id="customcheckbox1"
            onChange={changeHandler}
        />
    </div>
}

interface SliderProps {
    featureName: string
    feature: Feature
}

const Slider: React.FC<SliderProps> = ({ feature, featureName }) => {
    const [value, setValue] = useState(feature.val)

    const changeHandler = (event: any) => {
        const { value } = event.target
        setValue(value)
    }

    const submitHandler = () => {
        console.log(value)
        axios.post("/api/update_feature", { featureName, value })
    }

    return <div className="flex flex-row gap-2 w-full">
        <input
            type="range"
            className="
            form-range
            appearance-none
            w-full
            h-6
            p-0
            bg-gray-200
            rounded-lg
            focus:outline-none focus:ring-0 focus:shadow-none
            "
            id="customRange1"
            onChange={changeHandler}
        />
        <Button
            disabled={feature.val === value}
            onClick={submitHandler}
        >
            update
        </Button>
    </div>
}