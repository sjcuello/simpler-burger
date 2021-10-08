import { useEffect } from "react";
import { useRecoilState } from "recoil";
import { flavourList, sizeList, toppingsList } from "../recoil/atoms";

const useGetGroup = () => {

    const API = "http://localhost:3001/"

    const [sizes, setSize] = useRecoilState(sizeList)
    const [flavours, setFlavour] = useRecoilState(flavourList)
    const [toppings, setToppings] = useRecoilState(toppingsList)

    const fetchAPI = (url, callback) => {
        fetch(url)
            .then(response => response.json())
            .then(info => callback(info))
    }

    useEffect(() => {
        !sizes.length && fetchAPI(`${API}sizes`, setSize)
        !flavours.length && fetchAPI(`${API}flavours`, setFlavour)
        !toppings.length && fetchAPI(`${API}toppings`, setToppings)
    }, [API, sizes.length, flavours.length, toppings.length,setSize, setFlavour, setToppings]);

    return {
        sizes,
        flavours,
        toppings
    }
}

export default useGetGroup;