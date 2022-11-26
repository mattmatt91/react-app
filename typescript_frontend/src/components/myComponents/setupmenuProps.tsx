
import { Image } from "@/components/myComponents/images"
import { Btn } from "@/components/myComponents/btn"

type Key = string
type PathImg = string
type Controls = string[]

export interface Feature {
    key: Key,
    path_img: PathImg,
    controlls: Controls
}

export interface Features {
    [key: Key]: Feature
}


interface FeatureCompProps {
    featureName: string
    feature: Feature
}


const ControllComp: React.FC<FeatureCompProps> = ({ featureName, feature }) => {

    return <div>
        <div>
            <Image key={featureName} featureName={featureName} feature={feature} />
        </div>
        <div>
            <Btn key={featureName} featureName={featureName} feature={feature} />
        </div>
    </div>
}


export const FeatureComp: React.FC<FeatureCompProps> = ({ featureName, feature }) => {

    return <div className="flex w-full">
        <ControllComp featureName={featureName} feature={feature} />
    </div>
}
