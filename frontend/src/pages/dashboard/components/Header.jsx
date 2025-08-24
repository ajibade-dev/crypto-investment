import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { 
  DropdownMenu, 
  DropdownMenuContent, 
  DropdownMenuItem, 
  DropdownMenuLabel, 
  DropdownMenuTrigger 
} from "@/components/ui/dropdown-menu";
import { useSelector, useDispatch } from "react-redux";
import { useLogoutMutation } from "@/slices/usersApiSlice";
import { logout } from "@/slices/authSlice";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

export default function Header() {
  const { userInfo } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const navigate = useNavigate()
  const [logoutApiCall] = useLogoutMutation();

  const logoutHandler = async () => {
    try {
      await logoutApiCall().unwrap();
      dispatch (logout());
      navigate('/')
      toast.success('Logout Succesful')
    } catch (err) {
      console.log(err)
    }
  }
  return (
    <header className="sticky top-0 z-30 bg-white border-b font-heading">
      <div className="flex items-center justify-between px-4 py-3 md:px-6 md:py-5">
        <div>
          {/* Display personalized welcome message if logged in */}
          {userInfo ? (
            <h1 className="text-xl lg:text-3xl font-semibold font-heading">
              Welcome to your dashboard, <span className="text-[#222ad6]">{userInfo.name}</span> 👋
            </h1>
          ) : (
            <h1 className="text-xl font-semibold">Welcome to Your Dashboard</h1>
          )}
        </div>

        {/* User dropdown */}
        {userInfo ? (
          <DropdownMenu>
            <DropdownMenuTrigger className="rounded-full outline-none" title={userInfo.name}>
              <Avatar>
                <AvatarImage src={userInfo.avatar || ""} alt={userInfo.name} />
                <AvatarFallback>
                  {userInfo.name ? userInfo.name.charAt(0).toUpperCase() : "U"}
                </AvatarFallback>
              </Avatar>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-48">
              <DropdownMenuLabel>{userInfo.name}</DropdownMenuLabel>
              <DropdownMenuItem asChild>
                <a href="/dashboard/settings">Update Profile</a>
              </DropdownMenuItem>
              {/* <DropdownMenuItem asChild>
                <a href="/support">Update Profile</a>
              </DropdownMenuItem> */}
              <DropdownMenuItem onClick={ logoutHandler }  >
                <div className="rounded-md px-5 py-2 bg-red-500 text-white cursor-pointer">Log Out</div>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        ) : (
          <a href="/login" className="text-blue-600">Log in</a>
        )}
      </div>
    </header>
  );
}
