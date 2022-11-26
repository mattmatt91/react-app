import axios from "axios"
import { ChangeEvent, useEffect, useState } from "react"
import { Image } from "@/components/myComponents/images"
import { Features, FeatureComp } from "@/components/myComponents/setupmenuProps"










export default function MenuPage() {
    const [features, setFeatures] = useState<Features>({})

    useEffect(() => {
        axios.get<Features>("/api/menues_page").then((res) => {
            setFeatures(res.data)
            console.log(features);
        })
    }, [])



    
    return <div className="flex flex-col justify-center items-center w-full pt-12">
        <div className="text-xl underline pb-4">
            My fancy ui for spectrum stuff!
        </div>
        <div className="flex justify-center">
            {
                Object.keys(features).map((key) => {
                    return <FeatureComp key={key} featureName={key} feature={features[key]} /> // hier komm ich nicht weiter, muss ich das in interface Features typen als interface von key?
                })
            }
        </div>
                
       

        </div>

}
