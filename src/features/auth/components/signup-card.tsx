import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import { FcGoogle } from "react-icons/fc"
import { FaGithub } from "react-icons/fa"
import { signInFlow } from "../types"
import { ReactElement, useState } from "react"
import { TriangleAlert } from "lucide-react"
import { useAuthActions } from "@convex-dev/auth/react";
interface   SignUpCardProps {
    //setState is a function input type is either signIn or signUp
    // syntax - name(input type)=>return type
    setState:(state:signInFlow)=>void;
}

export const SignUpCard=({setState}:SignUpCardProps)=>{
    const {signIn}=useAuthActions()
    const [email,setEmail]=useState("");
    const [password,setPassword]=useState("");
    const [name,setName]=useState("");
    const [confirmPassword,setConfirmPassword]=useState("")
    const [pending,setPending]=useState(false);
    const [error,setError]=useState("");
    const handleProvider=(value:"github"|"google")=>{
        setPending(true)
        signIn(value).finally(()=>{
            setPending(false)
        })
    }
    const handleSubmitPassword=(e:React.FormEvent<HTMLFormElement>)=>{
        e.preventDefault()
        setPending(true)
        if(password!=confirmPassword) {
            setError("Password do not match")
    
            return;
        }
        signIn("password",{name,email,password,flow:'signUp'}).catch((e)=>{
            console.log(e)
            setError(e)
            return;
        }).finally(()=>{
            setPending(false)
        })

    }
return (
  <Card className="w-full h-full p-8">
    <CardHeader className="px-0 pt-0">   
    <CardTitle>
        Sign up to continue
    </CardTitle> 
    <CardDescription>
        Use your email or another service to continue
    </CardDescription>
    </CardHeader>
    {!!error&&(
    <div className="bg-destructive/20 p-3 rounded-md flex items-center gap-x-2 text-sm">
        <TriangleAlert className="size-5 text-red-500"/>
        <p className="text-red-700">{error}</p>
    </div>
   )}
    <CardContent className="space-y-5 px-0 pb-0">
<form className="space-y-2.5" onSubmit={handleSubmitPassword}>
<Input
    disabled={pending}
    type="text"
    required
    placeholder="Full name"
    onChange={(e)=>setName(e.target.value)}
    value={name}
    />
<Input
    disabled={pending}
    type="email"
    required
    placeholder="Email"
    onChange={(e)=>setEmail(e.target.value)}
    value={email}
    />
    <Input
    disabled={pending}
    type="password"
    required
    placeholder="Password"
    onChange={(e)=>setPassword(e.target.value)}
    value={password}
    /> <Input
    disabled={pending}
    type="password"
    required
    placeholder="Confirm password"
    onChange={(e)=>setConfirmPassword(e.target.value)}
    value={confirmPassword}
    />
    <Button disabled={pending} className="w-full" size="lg" type="submit" >
        Continue
</Button>    
    </form>
    <Separator/>
    <div className="flex flex-col gap-y-2.5">
        <Button 
        disabled={pending}
        onClick={()=>handleProvider('google')}
        variant="outline"
        size="lg"
        className="w-full relative"

        ><FcGoogle className="size-5 absolute top-2.5 left-2.5"/>
Continue with Google 

        </Button>
        <Button 
        disabled={pending}
        onClick={()=>handleProvider('github')}
        variant="outline"
        size="lg"
        className="w-full relative"

        ><FaGithub className="size-5 absolute top-2.5 left-2.5"/>
Continue with Github 

        </Button>
    </div>
    <p className="text-xs text-muted-foreground">
Already have an account? <span onClick={()=>setState("signIn")} className="cursor-pointer text-base text-sky-600 hover:underline">Sign in</span>
    </p>
    </CardContent>
 
    

  </Card>
)}