import { render, fireEvent } from "@testing-library/react";
import Login from "../components/Login";
import Header from "../components/common/Header";
import { UserContext, UserContextProvider } from "../contexts/User/UserContext";
import { screen } from "@testing-library/dom";

it("renders header", () => {
  const { queryByTitle } = render(<Header />);
  const header = queryByTitle("header");

  expect(header).toBeTruthy();
});

it("renders header in login", () => {
  const { queryAllByTitle } = render(
    <UserContextProvider>
      <Login />
    </UserContextProvider>
  );
  const header = queryAllByTitle("header");

  expect(header).toBeTruthy();
});

describe("when entering credentials", () => {
  it("reads the values", () => {
    const { queryByTitle } = render(
      <UserContextProvider>
        <Login />
      </UserContextProvider>
    );

    const usernameInput = queryByTitle("username").querySelector("input");
    const passwordInput = queryByTitle("password").querySelector("input");

    fireEvent.input(usernameInput, { target: { value: "proc" } });
    fireEvent.input(passwordInput, { target: { value: "proc123" } });

    expect(usernameInput.value).toBe("proc");
    expect(passwordInput.value).toBe("proc123");
  });
});

describe("when entering incorrect credentials", () => {
  it("reads the values", () => {
    const { queryByTitle, getByText } = render(
      <UserContextProvider>
        <Login />
      </UserContextProvider>
    );

    const usernameInput = queryByTitle("username").querySelector("input");
    const passwordInput = queryByTitle("password").querySelector("input");

    fireEvent.input(usernameInput, { target: { value: "wrong" } });
    fireEvent.input(passwordInput, { target: { value: "wrong" } });

    expect(screen.getByTitle("error")).toBeTruthy();
  });
});
