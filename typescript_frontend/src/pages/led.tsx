import Button from "@/components/buttons/Button"
import axios from "axios"
import { ChangeEvent, useEffect, useState } from "react"

function map_bool(bool_val: any) {
    if (bool_val) {
        return 'ON'
    }
    return 'OFF'
}

type Feature = boolean | number | string


interface Features {
    [key: string]: Feature
}

interface FeatureCompProps {
    featureName: string
    feature: Feature
}

interface SliderProps {
    featureName: string
    feature: Feature
}

const BtnToggle: React.FC<BtnToggleProps> = ({ feature, featureName }) => {
    const [cheked, setChecked] = useState(feature)
    const changeHandler = () => {
        setChecked(!cheked)  
        console.log(typeof cheked, cheked)
        axios.post("/api/update_feature", { featureName, cheked })
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


interface BtnToggleProps {
    featureName: string
    feature: Feature
}

const Slider: React.FC<SliderProps> = ({ feature, featureName }) => {
    const [value, setValue] = useState(feature)

    const changeHandler = (event: any) => {
        const { value } = event.target
        const parsed = parseFloat(value)
        setValue(parsed)
    }

    const submitHandler = () => {
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
            disabled={feature === value}
            onClick={submitHandler}
        >
            update
        </Button>

    </div>
}

const FeatureComp: React.FC<FeatureCompProps> = ({ featureName, feature }) => {

    const featureType = typeof feature

    if (featureType == "number") {
        return <div className="grid grid-cols-3 gap-2 items-center">
            <div className="font-bold text-xl">
                {featureName}
            </div>
            <div>
                {feature}
            </div>
            <Slider feature={feature} featureName={featureName} />
        </div>
    }

    else if (featureType == "boolean") {
        return <div className="grid grid-cols-3 gap-2 items-center">
            <div className="font-bold text-xl">
                {featureName}
            </div>
            <div>
                {map_bool(feature) // warum kann man das nur mit any
                }
                {feature}
            </div>
            <BtnToggle feature={feature} featureName={featureName} />
        </div>
    }
    return <>{`${featureType} not implemented yet`}</>
}

export default function ComponentsPage() {

    const [features, setFeatures] = useState<Features>({})

    useEffect(() => {
        axios.get<Features>("/api/features").then((res) => {
            setFeatures(res.data)
        })
    }, [])


    return <div className="flex flex-col justify-center items-center w-full pt-12">
        <div className="text-xl underline pb-4">
            My fancy ui for spectrum stuff!
        </div>
        <div className="flex flex-col gap-2 justify-center">
            {
                Object.keys(features).map((key) => {
                    return <FeatureComp key={key} featureName={key} feature={features[key]} />
                })
            }
        </div>
    </div>
}