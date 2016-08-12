/**
 * j2D API
 * @licence MIT
 * @version 1.0.0
 */

/**
 * This interface is base interface for custom core handlers.
 * All handlers has a status of `isEnabled` which influences activity and which is readonly,
 * but you can change its status by means of two methods: `enable()` and `disable()`.
 *
 * @interface IHandler
 *
 * @property {boolean} isEnabled = false, Property show current status of handler.
 */
interface IHandler {
    isEnabled: boolean

    /**
     * Switches a status of `isEnabled` to true
     */
    enable(): IHandler

    /**
     * Switches a status of `isEnabled` to false
     */
    disable(): IHandler
}
