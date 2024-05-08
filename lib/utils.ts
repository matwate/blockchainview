import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}


export function checkForException(exception: any) {
  if (typeof exception === 'string') {
    const exceptionObj = JSON.parse(exception)
    return exceptionObj.exception ? exceptionObj.exception : null
  }else if (typeof exception === 'object') {
    return exception.exception
  }else{
    return null
  }
}