import { createContext, useState, useEffect } from "react";
import { food_list } from "../assets/assets";
export const StoreContext = createContext(null);
const StoreContextProvider = (props) => {
    const [cartItems, setCartItems] = useState({});
    const url = "http://localhost:4000/";
    const [token, setToken] = useState(" ");


    // const [food_list, setFoodList] = useState([]) //use for fetching food from server




    const addToCart = async (itemId) => {
        if (!cartItems[itemId]) {
            setCartItems((prev) => ({ ...prev, [itemId]: 1 }));
        } else {
            setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
        }
        if(token){
            await axios.post(url+"api/cart/add",{itemId},{headers:{token}})
        }
    };


    const removeFromCart = async (itemId) => {
        if (cartItems[itemId] > 1) {
            setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }));
        } else {
            const { [itemId]: _, ...rest } = cartItems;
            setCartItems(rest);
        }

        if(token){
            await axios.post(url+ "/api/cart/remove", {itemId},{headers:{token}} )
        }
    };



    useEffect(() => {
        console.log(cartItems);
    }, [cartItems]);
    const getTotalCartAmount=()=>{
        let totalAmount = 0;
        for (const item in cartItems){
            if (cartItems[item]>0){
                let itemInfo = food_list.find((product)=>product._id===item)
                totalAmount += itemInfo.price* cartItems[item];
            }
        }
        return totalAmount;
    };

    // useEffect(()=> {
    //     if(localStorage.getItem("token")){
    //         setToken(localStorage.getItem("token"))
    //         await loadCartData(localStorage.getItem("token"))
    //     }
    // })


    useEffect(() => {
        const fetchCartAndSetToken = async () => {
            const token = localStorage.getItem("token");
            if (token) {
                setToken(token);
                await loadCartData(token);  // Assuming loadCartData is the function to fetch cart data
            }
        };
    
        fetchCartAndSetToken();  // Call the async function
    }, []);  

    
    
const loadCartData= async (token) => {
    const response = await axios.get(url + "api/cart/get", {}, {headers:{token}})
    setCartItems (response.data.data);
};



// for fetching food from backend 

// const fectchFoodList = async () =>{
//     const response = await axios.get(url+"api/food/list")
//     setFoodList(response.data.data)
// } 
//used server

    // useEffect(()=>{


    //     async function loadData(){
    //         await fectchFoodList()
    //         if(localStorage.getItem("token")){
    //             setToken(localStorage.getItem("token"))
    // await loadCartData(localStorage.getItem("token"))
    //         }
    //     }
    //     loadData();

    // },[])



    const contextValue = {
        food_list,
        cartItems,
        setCartItems,
        addToCart,
        removeFromCart,
        getTotalCartAmount,
        url,
        token,
        setToken,
    };
    return (
        <StoreContext.Provider value={contextValue}>
            {props.children}
        </StoreContext.Provider>
    );
};
export default StoreContextProvider;









