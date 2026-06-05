const data = {
    user: {
        name: "jaspal",
        address: {
            city: "NYC"
        }
    }
};

// const { user: { address: { city } } } = data;
console.log(data);
console.log(data.user);
console.log(data.user.address);
console.log(data.user.address.city);