import React from "react";
import { render } from "@testing-library/react";
import UserInfo from "../components/UserInfo";

describe('UserInfoSnapshot',()=>{
    it('will match snapshot',()=>{
        const componentToTest = render( 

              <UserInfo u={null}/>
)
        expect(componentToTest).toMatchSnapshot()
    })
})
