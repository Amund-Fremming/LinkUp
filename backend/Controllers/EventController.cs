using Interfaces;
using Microsoft.AspNetCore.Mvc;
using Models;
using Services;

namespace Controllers;

[ApiController]
[Route("api/event")]
public class EventController : ControllerBase
{

    public readonly IEventService _eventService;

    public EventController(IEventService eventService) {
        _eventService = eventService;
    }

    [HttpPost ("newevent")]
    public Task<Event?> CreateEvent(Event newEvent, string creatorUserId)
    {
        throw new NotImplementedException();
    }

    [HttpDelete]
    public Task DeleteEvent(int eventId)
    {
        throw new NotImplementedException();
    }

    [HttpGet]
    public async Task<ActionResult> GetEventByID(int eventId)
    {
        try 
        {
            var eventt = await _eventService.GetEventByID(eventId); 
            return Ok(eventt);
        } 
        catch(InvalidOperationException e) 
        {
            return BadRequest(e.Message);
        }
        catch(KeyNotFoundException e) 
        {
            return NotFound(e.Message);
        }
        catch(Exception e)
        {
            return StatusCode(500, e.Message);
        }
    }

    [HttpGet ("city")]
    public async Task<ActionResult> GetEventsInCity(string city)
    {
         try 
        {
            ICollection<Event> events = await _eventService.GetEventsInCity(city);
            return Ok(events);
        } 
        catch(InvalidOperationException e) 
        {
            return BadRequest(e.Message);
        }
        catch(Exception e)
        {
            return StatusCode(500, e.Message);
        }
    }

    [HttpGet ("eventvisibility")]
    public Task<ICollection<Event>> GetUserEventsByVisibility(string visibility)
    {
        throw new NotImplementedException();
    }

    [HttpGet ("eventfriends")]
    public Task<ICollection<Event>?> GetUserFriendEvents(string userId)
    {
        throw new NotImplementedException();
    }

    [HttpPut]
    public Task<Event> UpdateEvent(int eventId, Event updatedEvent)
    {
        throw new NotImplementedException();
    }
}