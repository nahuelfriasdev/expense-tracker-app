import ScreenWrapper from "@/components/ScreenWrapper";
import Typo from "@/components/Typo";
import { useAuth } from "@/contexts/authContext";

const Home = () => {
  const {user} = useAuth();

  // console.log("user: ",user)
  // const handleLogout = async () => {
  //   await signOut(auth);
  // }

  return (
    <ScreenWrapper>
      <Typo>asdsad</Typo>
      {/* <Button onPress={handleLogout}>
        <Typo color={colors.black}>Logout</Typo>
      </Button> */}
    </ScreenWrapper>
  )
}

export default Home;