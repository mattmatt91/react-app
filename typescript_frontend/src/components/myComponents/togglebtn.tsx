import axios from "axios"
import { ChangeEvent, useEffect, useState } from "react"
import { Features, FeatureComp, Feature } from "@/components/myComponents/Features"

interface BtnToggleProps {
    featureName: string
    feature: Feature
}

export const BtnToggle: React.FC<BtnToggleProps> = ({ feature, featureName }) => {
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