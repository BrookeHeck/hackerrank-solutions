function compareTriplets(a, b) {
    const alice = 0;
    const bob = 0;
    for(let i = 0; i < 3; i++) {
        if(a[i] > b[i]) alice++;
        if(a[i] < b[i]) bob++; 
    }
    return [alice, bob];
}