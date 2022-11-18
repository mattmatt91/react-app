import axios from "axios"
import { ChangeEvent, useEffect, useState } from "react"
import { Features, FeatureComp, Feature } from "@/components/myComponents/Features"





interface DropdownProps {
    featureName: string
    feature: Feature
}

export const Dropdown: React.FC<DropdownProps> = ({ feature, featureName }) => {
    const [value, setValue] = useState(feature.val)
    const changeHandler = (event: any) => {
        const { value } = event.target
        axios.post("/api/update_feature", { featureName, value }).then((response) => {
            console.log(response.data);
            setValue(response.data[feature.key])
          }, (error) => {
            console.log(error);
          });
    }
    return <div className="flex flex-row gap-2 w-full" >
        <select name="select"
            onChange={changeHandler}
            className="
         w-full
         h-6
         p-0
         bg-gray-200
         rounded-lg
         focus:outline-none focus:ring-0 focus:shadow-none
         ">
            {feature.options.map(option =>
                <option key={option as string}>{option}</option>
            )}
        </select>


    </div>
}
