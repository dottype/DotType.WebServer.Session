import { Collection } from "../../../Packages/DotType/Collections/Collection<T>";
import { NameValueObject } from "../../../Packages/DotType.Utils/NameValueObject";

export interface ISession
{
    /** Gets or sets the Session Id. */
    Id: string | null;

    /** Gets or sets the Session Items. */
    Items: Collection<NameValueObject>;
}