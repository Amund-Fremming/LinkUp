using System.ComponentModel.DataAnnotations;

namespace Models;

public class RegistrationRequest
{
    [Required]
    public string Firstname { get; set; }

    [Required]
    public string Lastname { get; set; }

    [Required]
    public string Email { get; set; }

    [Required]
    public string Password { get; set; }

    [Required]
    public DateTime BornDate { get; set; }

    [Required]
    public string Gender { get; set; }
}
