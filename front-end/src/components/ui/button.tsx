import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-primary/90",
        destructive:
          "bg-destructive text-destructive-foreground hover:bg-destructive/90",
        outline:
          "border border-input bg-background hover:bg-accent hover:text-accent-foreground",
        secondary:
          "bg-secondary text-secondary-foreground hover:bg-secondary/80",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline",
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 rounded-md px-3",
        lg: "h-11 rounded-md px-8",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"


const Login = () => {
  const [username, setUsername] = React.useState("")
  const [password, setPassword] = React.useState("")
  const [showMessage, setShowMessage] = React.useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Login attempt with:", { username, password })
  }

  const handleRegister = () => {
    setShowMessage(true)
    setTimeout(() => {
      setShowMessage(false)
    }, 30000) // 30 seconds
  }

  return (
    <div className="w-full max-w-md p-8 rounded-lg relative">
      <h2 className="text-3xl font-bold mb-6 text-center text-white">Login</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="username" className="block text-sm font-medium text-blue-100">
            Username
          </label>
          <input
            type="text"
            id="username"
            className="mt-1 block w-full rounded-md bg-blue-800 border-blue-700 text-white placeholder-blue-400 focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </div>
        <div className="mb-6">
          <label htmlFor="password" className="block text-sm font-medium text-blue-100">
            Password
          </label>
          <input
            type="password"
            id="password"
            className="mt-1 block w-full rounded-md bg-blue-800 border-blue-700 text-white placeholder-blue-400 focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <div className="flex space-x-4">
          <Button type="submit" className="flex-1 bg-blue-500 hover:bg-blue-600 text-white">
            Log in
          </Button>
          <Button type="button" onClick={handleRegister} className="flex-1 bg-green-500 hover:bg-green-600 text-white">
            Register
          </Button>
        </div>
      </form>
      {showMessage && (
        <div className="absolute top-0 left-0 right-0 mt-4 p-4 bg-yellow-500 text-white text-center rounded-md shadow-lg">
          Please contact the admin team for registration.
        </div>
      )}
    </div>
  )
}

export { Button, buttonVariants, Login }