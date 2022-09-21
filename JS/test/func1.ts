
type Logger = (message: string) => void

export default function func1(callback: (logger: Logger) => void) {
    const logger = (message: string) => {
        console.log(message)
    }
    callback(logger)
}