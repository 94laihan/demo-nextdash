import { authenticate } from "../lib/actions";
import LoginForm from "../components/login/loginForm/loginForm";

export default function LoginPage() {
    return (
        <div className="w-full h-full flex items-center justify-center">
            <LoginForm/>
        </div>
    );
}