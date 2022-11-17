import axios from "axios"
import { ChangeEvent, useEffect, useState } from "react"
import Button from "@/components/buttons/Button"
import { Dropdown } from "@/components/myComponents/dropdown"
import { BtnToggle }   from "@/components/myComponents/togglebtn"
import { Slider } from "@/components/myComponents/Slider"


type Key = string
type Val = string | number | boolean
type Options = boolean[] | number[] | string[]

export interface Feature {
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
            {feature.val}
            </div>
            <div>
                <Slider feature={feature} featureName={featureName} />
            </div>

        </div>
    }

    else if (featureType == "boolean") {
        return <div className="grid grid-cols-3 gap-3 items-center">
            <div className="font-bold text-xl">
                {featureName}
            </div>
            <div>
            {feature.val}
            </div>
            <div>
            {feature.val}
            </div>
            <div>
                <BtnToggle feature={feature} featureName={featureName} />
            </div>
        </div>
    }
    else if (featureType == "string") {
        return <div className="grid grid-cols-3 gap-3 items-center">
            <div className="font-bold text-xl">
                {featureName}
            </div>
            <div>
            {feature.val}
            </div>
            <div>
                <Dropdown feature={feature} featureName={featureName} />
            </div>
        </div>
    }
    return <>{`${featureType} not implemented yet`}</>
}
