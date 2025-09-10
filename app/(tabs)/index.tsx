import Button from "@/components/Button";
import ScreenWrapper from "@/components/ScreenWrapper";
import Typo from "@/components/Typo";
import { auth } from "@/config/firebase";
import { colors } from "@/constants/theme";
import { useAuth } from "@/contexts/authContext";
import { signOut } from "firebase/auth";

const Home = () => {
  const {user} = useAuth();

  console.log("user: ",user)
  const handleLogout = async () => {
    await signOut(auth);
  }

  return (
    <ScreenWrapper>
      <Typo>asdsad</Typo>
      <Button onPress={handleLogout}>
        <Typo color={colors.black}>Logout</Typo>
      </Button>
    </ScreenWrapper>
  )
}

export default Home;