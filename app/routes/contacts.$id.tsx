import {
  json,
  type LoaderFunctionArgs,
  type ActionFunctionArgs,
} from "@remix-run/node";
import { Form, useFetcher, useLoaderData } from "@remix-run/react";
import invariant from "tiny-invariant";
import { getContact, type ContactRecord, updateContact } from "../data";

export default function Contact() {
  const { contact } = useLoaderData<typeof loader>();

  return (
    <div id="contact">
      <div>
        <img
          alt={`${contact.first} ${contact.last} avatar`}
          key={contact.avatar}
          src={contact.avatar}
        />
      </div>

      <div>
        <h1>
          {contact.first || contact.last ? (
            <>
              {contact.first} {contact.last}
            </>
          ) : (
            <i>No Name</i>
          )}{" "}
          <Favorite contact={contact} />
        </h1>

        {contact.twitter ? (
          <p>
            <a href={`https://twitter.com/${contact.twitter}`}>
              {contact.twitter}
            </a>
          </p>
        ) : null}

        {contact.notes ? <p>{contact.notes}</p> : null}

        <div>
          <Form action="edit">
            <button type="submit">Edit</button>
          </Form>

          <Form
            action="destroy"
            method="post"
            onSubmit={(event) => {
              const response = confirm(
                "Please confirm you want to delete this record.",
              );
              if (!response) {
                event.preventDefault();
              }
            }}
          >
            <button type="submit">Delete</button>
          </Form>
        </div>
      </div>
    </div>
  );
}

function Favorite({
  contact,
}: {
  contact: Pick<ContactRecord, "favorite">;
}) {
  const fetcher = useFetcher();
  const isFavorited = fetcher.formData
    ? fetcher.formData.get("favorite") === "true"
    : contact.favorite;

  return (
    <fetcher.Form method="post">
      <button
        type="submit"
        aria-label={isFavorited ? "Remove from favorites" : "Add to favorites"}
        name="favorite"
        value={isFavorited ? "false" : "true"}
      >
        {isFavorited ? "★" : "☆"}
      </button>
    </fetcher.Form>
  );
}

export async function loader({ params }: LoaderFunctionArgs) {
  invariant(params.id, "Missing ID param");

  const contact = await getContact(params.id);

  if (!contact) {
    throw new Response("Not Found", { status: 404 });
  }

  return json({ contact });
}

export async function action({ params, request }: ActionFunctionArgs) {
  invariant(params.id, "Missing ID param");
  const formData = await request.formData();

  return updateContact(params.id, {
    favorite: formData.get("favorite") === "true",
  });
}
