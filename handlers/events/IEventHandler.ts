/**
 * j2D API
 * @licence MIT
 * @version 1.0.0
 */

/**
 * @interface IEventHandler
 */
interface IEventHandler extends IHandler {
    on(eventName?: string, callback?: Function): IEventHandler
    once(eventName?: string, callback?: Function): IEventHandler
    off(eventName?: string, callback?: Function): IEventHandler

    trigger(eventName?: string, data?: any): IEventHandler

    flush(eventName?: string): IEventHandler
}
