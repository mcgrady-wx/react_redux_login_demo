import { ADD_FLASH_MESSAGE,DELETE_FLASH_MESSAGE } from "../const"
import shortid from "shortid"
import findIndex from "lodash/findIndex" //lodash三方资源库，处理数据的方法

const flashMessages=(state=[],action={})=>{
	switch(action.type){
		// 三大原则：state不可以被直接改变
		case ADD_FLASH_MESSAGE:
			return [
				...state,
				{
					id: shortid.generate(),
                    type: action.message.type,
                    text: action.message.text
				}
			]
			//数组合并
		case DELETE_FLASH_MESSAGE:
			const index=findIndex(state,{id:action.id})//遍历数组，查找下标返回下标
			if(index>=0){
				//使用slice分割数组在合并
				// ...[10,20,30] -> 10
            	// ...[10,20,30] -> 30
           	 	// [] -> [10,30]
				return [
					...state.slice(0,index),
					...state.slice(index+1)
				]
			}
			return state
		default:
			return state
	}
}

export default flashMessages