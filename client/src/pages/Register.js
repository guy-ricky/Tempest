import {
    Card,
    CardBody,
    CardFooter,
    Typography,
    Input,
    Button,
  } from "@material-tailwind/react";
   
  export function RegisterCard() {
    return (
        <div className="pt-[10px] pb-10 z-10">
            <Card className="w-72 border border-[#232f3e] mx-auto">
        
          <Typography variant="h4" className="text-[#232f3e] text-center pt-2">
            Sign Up
          </Typography>
        <CardBody className="flex flex-col gap-4">
        <Input label="Username" size="lg" />
          <Input label="Email" size="lg" />
          <Input label="Password" size="lg" />
        </CardBody>
        <CardFooter className="pt-0">
          <Button  fullWidth className="bg-[#232f3e] hover:bg-[#febd69] hover:text-[#232f3e] shadow-none hover:scale-105 hover:shadow-none focus:scale-105 focus:shadow-none active:scale-100">
            Sign Up
          </Button>
          <Typography variant="small" className="mt-6 flex justify-center">
            Already have an account?
            <Typography
              as="a"
              href="/login"
              variant="small"
              className="ml-1 font-bold"
            >
              Sign Up
            </Typography>
          </Typography>
        </CardFooter>
      </Card>
        </div>
      
    );
  }