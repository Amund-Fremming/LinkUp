using System.ComponentModel.DataAnnotations;
using Enums;

namespace Models;

public class Event
{
    [Key]
    public int EventID { get; set; }
    public string CreatorUserID { get; set; }
    public User? User { get; set; }
    public string EventName { get; set; }
    public string EventDescription { get; set; }
    public DateTime EventDateTimeStart { get; set; }
    public DateTime EventDateTimeEnd { get; set; }
    public Visibility Visibility { get; set; }
    public string InviteURL { get; set; }
    public string? FrontImage { get; set; }
    public string? MinCapacity { get; set; }
    public string? MaxCapacity { get; set; }
    public int LocationID { get; set; }
    public Location Location { get; set; }
    public ICollection<EventRelation>? EventRelations { get; set; }

    public Event() {}

    public Event(string creatorUserID, string eventName, string eventDescription, 
        DateTime eventDateTimeStart, DateTime eventDateTimeEnd, Visibility visibility, string inviteURL, int locationID, Location location)
    {
        CreatorUserID = creatorUserID;
        EventName = eventName;
        EventDescription = eventDescription;
        EventDateTimeStart = eventDateTimeStart;
        EventDateTimeEnd = eventDateTimeEnd;
        Visibility = visibility;
        InviteURL = inviteURL;
        LocationID = locationID;
        Location = location;
    }
}   