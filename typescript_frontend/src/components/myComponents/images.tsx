import axios from "axios"
import { useState } from "react"
import { Feature } from "@/components/myComponents/setupmenuProps"






interface ImageProps {
    feature: Feature
    featureName: string


}

export const Image: React.FC<ImageProps> = ({ feature, featureName }) => {
    return <div className="flex w-full" >

        <img src={feature.path_img}
            alt="image"
            className="
         w-full
         bg-gray-200
         rounded-lg
         focus:outline-none focus:ring-0 focus:shadow-none
         " />
    

    </div>
}