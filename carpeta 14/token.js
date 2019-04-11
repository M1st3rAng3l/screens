function addToken(bd, user, token){
    let now = newDate();
    return{...bd[user]}}

    function go(){
        let now = newDate();
        let bd={
            user1={
                token=[
                    {
                        timestamp: now.getTime(),
                        token:100
                    },
                    {
                        timestamp: now.getTime(),
                        token: 101
                    }
                ]
            },
            user2={
                token=[
                    {
                        timestamp: now.getTime(),
                        token:100
                    },
                    {
                        timestamp: now.getTime(),
                        token: 101
                    }
                ]
            },
        };
        console.log(addToken(bd, "user2", 333));
    }