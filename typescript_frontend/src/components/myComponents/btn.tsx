import axios from "axios"
import { useState } from "react"
import { Feature } from "@/components/myComponents/setupmenuProps"
import Button from "../buttons/Button"

interface BtnToggleProps {
    featureName: string
    feature: Feature
}

export const Btn: React.FC<BtnToggleProps> = ({ feature, featureName }) => {
    // const [value, setValue] = useState(feature.val)
    // const changeHandler = () => {
    //     setValue(!value)
    //     axios.post("/api/update_feature", { featureName, value }).then((response) => {
    //         console.log(response.data);
// 
    //     });
    // }

    return <div className="flex flex-row gap-2 w-full" >
        {
            feature.controlls.map(control =>
                <button >{control}</button>
            )
        }

    </div>
}




