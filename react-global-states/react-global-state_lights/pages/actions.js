import Link from "../components/Link";
import QuickActions from "../components/QuickActions";

export default function Actions({ isOn }) {
  function handleTurnOff() {
    setIsOn((isOn) => false);
  }
  function handleTurnOn() {
    setIsOn((isOn) => true);
  }

  return (
    <>
      <Link href="/">← Back home</Link>
      <h1>Quick Actions</h1>
      <QuickActions
        handleTurnOff={handleTurnOff}
        handleTurnOn={handleTurnOn}
        isOn={isOn}
      />
    </>
  );
}
