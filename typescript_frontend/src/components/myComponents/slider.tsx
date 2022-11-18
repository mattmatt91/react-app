import axios from "axios"
import { ChangeEvent, useEffect, useState } from "react"
import { Features, FeatureComp, Feature } from "@/components/myComponents/Features"
import Button from "@/components/buttons/Button"


interface SliderProps {
    featureName: string
    feature: Feature
}

export const Slider: React.FC<SliderProps> = ({ feature, featureName }) => {
    const [value, setValue] = useState(feature.val)

    const changeHandler = (event: any) => {
        const { value } = event.target
        feature.val = value
        setValue(value)
        axios.post("/api/update_feature", { featureName, value }).then((response) => {
            console.log(response.data);
        }, (error) => {
            console.log(error);
        });
     
    }


    return <div className="flex flex-row gap-3 w-full">
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

            min="0"
            max={100}
            onChange={changeHandler}
        />

    </div>
}