import { SessionOptions } from "./SessionOptions";
import { ISessionStorage } from "./Interfaces/ISessionStorage";
import { ArgumentNullException } from "dottype/Exceptions/ArgumentNullException";

/** Represents the base class for managing sessions. */
export class SessionManager
{
    /** Gets the Sessin Options for this manager. */
    public readonly Options: SessionOptions = new SessionOptions();

    /** Gets or sets the session storage. */
    public SessionStorage: ISessionStorage | null = null;

    // /**
    //  * Indicates that SessionManager should use the given ISessionStorage.
    //  * @param sessionStorage The ISessionTorage to use.
    //  */
    public UseStorage(sessionStorage: { new (): ISessionStorage }): SessionManager
    {
        if(sessionStorage == null)
        {
            throw new ArgumentNullException("sessionStorage");
        }

        this.SessionStorage = new sessionStorage();
        return this;
    }
}