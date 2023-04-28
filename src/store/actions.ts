import traer_post from '../services/datapost'
import { AddShapeAction, AuthActions, GetShapeAction, LogInAction, LogOutAction, ShapeActions } from "../types/store"


export const logOut = (): LogOutAction => {
    return {
        action: AuthActions.LOGOUT,
        payload: undefined
    }
}

export const logIn = ({payload}: Pick<LogInAction, "payload">): LogInAction => {
    return {
        action: AuthActions.LOGIN,
        payload
    }
}

export const getShape = async (): Promise<GetShapeAction> => {
    const Shape = await traer_post();
    return {
        action: ShapeActions.GET,
        payload: Shape
    }
}

export const addNewShape = ({payload}: Pick<AddShapeAction, "payload">): AddShapeAction => {
    return {
        action: ShapeActions.ADD,
        payload
    }
}

