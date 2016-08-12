/**
 * j2D API
 * @licence MIT
 * @version 1.0.0
 */

/**
 * @interface IInputHandler
 */
interface IInputHandler extends IHandler {
    events: IEventHandler
    keyMap: Object

    constructor(): IInputHandler

    init(events?: IEventHandler): IInputHandler
    update(data?: any): IInputHandler
    clear(data?: any): IInputHandler

    flush(): IInputHandler

    load(data: string|Array): IInputHandler
    save(): string
}
