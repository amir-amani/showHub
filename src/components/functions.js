const handleScroll = (shows , setVisibleItems, loading , setLoading , visibleItems) => {
    const scrollHeigth = document.documentElement.scrollHeight;
    const clientHeight = document.documentElement.clientHeight;
    const scrollTop = document.documentElement.scrollTop;
    if(scrollTop + clientHeight >= scrollHeigth - 20 && !loading) {
        loadMoreItems(shows , setVisibleItems , setLoading , visibleItems);
    };
}

const loadMoreItems = (shows , setVisibleItems , setLoading , visibleItems) => {
    setLoading(true);
    
    setTimeout(() => {
        const newVisibleItems = shows.slice(0, visibleItems.length + 10);
        setVisibleItems(newVisibleItems);
        setLoading(false);
    }, 2000);
}




export {handleScroll }