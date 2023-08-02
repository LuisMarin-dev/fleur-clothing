useEffect(()=>{
    if(store.user.role != "Restaurant" && store.user.role != "Admin") navigate("/access-denied")
})