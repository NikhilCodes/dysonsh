export function Button(props: any) {
  return (
    <button className={'text-3xl font-bold underline'} {...props} />
  );
}

export function PrimaryButton(props: any) {
  return (
    <button className={'primary-button'} {...props} />
  );
}
